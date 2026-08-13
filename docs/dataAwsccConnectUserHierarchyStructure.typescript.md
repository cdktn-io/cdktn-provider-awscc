# `dataAwsccConnectUserHierarchyStructure` Submodule <a name="`dataAwsccConnectUserHierarchyStructure` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectUserHierarchyStructure <a name="DataAwsccConnectUserHierarchyStructure" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

new dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure(scope: Construct, id: string, config: DataAwsccConnectUserHierarchyStructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig">DataAwsccConnectUserHierarchyStructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig">DataAwsccConnectUserHierarchyStructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isConstruct"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformElement"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectUserHierarchyStructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectUserHierarchyStructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectUserHierarchyStructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.userHierarchyStructure">userHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.userHierarchyStructureArn">userHierarchyStructureArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `userHierarchyStructure`<sup>Required</sup> <a name="userHierarchyStructure" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.userHierarchyStructure"></a>

```typescript
public readonly userHierarchyStructure: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a>

---

##### `userHierarchyStructureArn`<sup>Required</sup> <a name="userHierarchyStructureArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.userHierarchyStructureArn"></a>

```typescript
public readonly userHierarchyStructureArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectUserHierarchyStructureConfig <a name="DataAwsccConnectUserHierarchyStructureConfig" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

const dataAwsccConnectUserHierarchyStructureConfig: dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user_hierarchy_structure#id DataAwsccConnectUserHierarchyStructure#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectUserHierarchyStructureUserHierarchyStructure <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructure" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

const dataAwsccConnectUserHierarchyStructureUserHierarchyStructure: dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure = { ... }
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

const dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive: dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive = { ... }
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

const dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour: dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour = { ... }
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

const dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne: dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne = { ... }
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

const dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree: dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree = { ... }
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

const dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo: dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

new dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

new dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

new dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

new dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

new dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUserHierarchyStructure } from '@cdktn/provider-awscc'

new dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive">levelFive</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour">levelFour</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne">levelOne</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree">levelThree</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure">DataAwsccConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelFive`<sup>Required</sup> <a name="levelFive" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive"></a>

```typescript
public readonly levelFive: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a>

---

##### `levelFour`<sup>Required</sup> <a name="levelFour" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour"></a>

```typescript
public readonly levelFour: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a>

---

##### `levelOne`<sup>Required</sup> <a name="levelOne" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne"></a>

```typescript
public readonly levelOne: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a>

---

##### `levelThree`<sup>Required</sup> <a name="levelThree" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree"></a>

```typescript
public readonly levelThree: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a>

---

##### `levelTwo`<sup>Required</sup> <a name="levelTwo" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo"></a>

```typescript
public readonly levelTwo: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserHierarchyStructureUserHierarchyStructure;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure">DataAwsccConnectUserHierarchyStructureUserHierarchyStructure</a>

---



