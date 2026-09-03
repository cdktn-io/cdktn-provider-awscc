# `dataAwsccConnectWorkspace` Submodule <a name="`dataAwsccConnectWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectWorkspace <a name="DataAwsccConnectWorkspace" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_workspace awscc_connect_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspace(scope: Construct, id: string, config: DataAwsccConnectWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig">DataAwsccConnectWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig">DataAwsccConnectWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.associations">associations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.media">media</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList">DataAwsccConnectWorkspaceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.pages">pages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList">DataAwsccConnectWorkspacePagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList">DataAwsccConnectWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference">DataAwsccConnectWorkspaceThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.associations"></a>

```typescript
public readonly associations: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `media`<sup>Required</sup> <a name="media" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.media"></a>

```typescript
public readonly media: DataAwsccConnectWorkspaceMediaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList">DataAwsccConnectWorkspaceMediaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.pages"></a>

```typescript
public readonly pages: DataAwsccConnectWorkspacePagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList">DataAwsccConnectWorkspacePagesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tags"></a>

```typescript
public readonly tags: DataAwsccConnectWorkspaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList">DataAwsccConnectWorkspaceTagsList</a>

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.theme"></a>

```typescript
public readonly theme: DataAwsccConnectWorkspaceThemeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference">DataAwsccConnectWorkspaceThemeOutputReference</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectWorkspaceConfig <a name="DataAwsccConnectWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceConfig: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_workspace#id DataAwsccConnectWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectWorkspaceMedia <a name="DataAwsccConnectWorkspaceMedia" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceMedia: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia = { ... }
```


### DataAwsccConnectWorkspacePages <a name="DataAwsccConnectWorkspacePages" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspacePages: dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages = { ... }
```


### DataAwsccConnectWorkspaceTags <a name="DataAwsccConnectWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceTags: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags = { ... }
```


### DataAwsccConnectWorkspaceTheme <a name="DataAwsccConnectWorkspaceTheme" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceTheme: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme = { ... }
```


### DataAwsccConnectWorkspaceThemeDark <a name="DataAwsccConnectWorkspaceThemeDark" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeDark: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark = { ... }
```


### DataAwsccConnectWorkspaceThemeDarkPalette <a name="DataAwsccConnectWorkspaceThemeDarkPalette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeDarkPalette: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette = { ... }
```


### DataAwsccConnectWorkspaceThemeDarkPaletteCanvas <a name="DataAwsccConnectWorkspaceThemeDarkPaletteCanvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeDarkPaletteCanvas: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas = { ... }
```


### DataAwsccConnectWorkspaceThemeDarkPaletteHeader <a name="DataAwsccConnectWorkspaceThemeDarkPaletteHeader" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeDarkPaletteHeader: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader = { ... }
```


### DataAwsccConnectWorkspaceThemeDarkPaletteNavigation <a name="DataAwsccConnectWorkspaceThemeDarkPaletteNavigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeDarkPaletteNavigation: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation = { ... }
```


### DataAwsccConnectWorkspaceThemeDarkPalettePrimary <a name="DataAwsccConnectWorkspaceThemeDarkPalettePrimary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeDarkPalettePrimary: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary = { ... }
```


### DataAwsccConnectWorkspaceThemeDarkTypography <a name="DataAwsccConnectWorkspaceThemeDarkTypography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeDarkTypography: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography = { ... }
```


### DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily <a name="DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeDarkTypographyFontFamily: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily = { ... }
```


### DataAwsccConnectWorkspaceThemeLight <a name="DataAwsccConnectWorkspaceThemeLight" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeLight: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight = { ... }
```


### DataAwsccConnectWorkspaceThemeLightPalette <a name="DataAwsccConnectWorkspaceThemeLightPalette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeLightPalette: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette = { ... }
```


### DataAwsccConnectWorkspaceThemeLightPaletteCanvas <a name="DataAwsccConnectWorkspaceThemeLightPaletteCanvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeLightPaletteCanvas: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas = { ... }
```


### DataAwsccConnectWorkspaceThemeLightPaletteHeader <a name="DataAwsccConnectWorkspaceThemeLightPaletteHeader" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeLightPaletteHeader: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader = { ... }
```


### DataAwsccConnectWorkspaceThemeLightPaletteNavigation <a name="DataAwsccConnectWorkspaceThemeLightPaletteNavigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeLightPaletteNavigation: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation = { ... }
```


### DataAwsccConnectWorkspaceThemeLightPalettePrimary <a name="DataAwsccConnectWorkspaceThemeLightPalettePrimary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeLightPalettePrimary: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary = { ... }
```


### DataAwsccConnectWorkspaceThemeLightTypography <a name="DataAwsccConnectWorkspaceThemeLightTypography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeLightTypography: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography = { ... }
```


### DataAwsccConnectWorkspaceThemeLightTypographyFontFamily <a name="DataAwsccConnectWorkspaceThemeLightTypographyFontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

const dataAwsccConnectWorkspaceThemeLightTypographyFontFamily: dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectWorkspaceMediaList <a name="DataAwsccConnectWorkspaceMediaList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get"></a>

```typescript
public get(index: number): DataAwsccConnectWorkspaceMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectWorkspaceMediaOutputReference <a name="DataAwsccConnectWorkspaceMediaOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia">DataAwsccConnectWorkspaceMedia</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceMedia;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia">DataAwsccConnectWorkspaceMedia</a>

---


### DataAwsccConnectWorkspacePagesList <a name="DataAwsccConnectWorkspacePagesList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get"></a>

```typescript
public get(index: number): DataAwsccConnectWorkspacePagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectWorkspacePagesOutputReference <a name="DataAwsccConnectWorkspacePagesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.inputData">inputData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.page">page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages">DataAwsccConnectWorkspacePages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputData`<sup>Required</sup> <a name="inputData" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.inputData"></a>

```typescript
public readonly inputData: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspacePages;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages">DataAwsccConnectWorkspacePages</a>

---


### DataAwsccConnectWorkspaceTagsList <a name="DataAwsccConnectWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectWorkspaceTagsOutputReference <a name="DataAwsccConnectWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags">DataAwsccConnectWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags">DataAwsccConnectWorkspaceTags</a>

---


### DataAwsccConnectWorkspaceThemeDarkOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark">DataAwsccConnectWorkspaceThemeDark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `palette`<sup>Required</sup> <a name="palette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.palette"></a>

```typescript
public readonly palette: DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.typography"></a>

```typescript
public readonly typography: DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeDark;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark">DataAwsccConnectWorkspaceThemeDark</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground">activeBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground">containerBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground">pageBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas">DataAwsccConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeBackground`<sup>Required</sup> <a name="activeBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground"></a>

```typescript
public readonly activeBackground: string;
```

- *Type:* string

---

##### `containerBackground`<sup>Required</sup> <a name="containerBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground"></a>

```typescript
public readonly containerBackground: string;
```

- *Type:* string

---

##### `pageBackground`<sup>Required</sup> <a name="pageBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground"></a>

```typescript
public readonly pageBackground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeDarkPaletteCanvas;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas">DataAwsccConnectWorkspaceThemeDarkPaletteCanvas</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background">background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover">textHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader">DataAwsccConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeDarkPaletteHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader">DataAwsccConnectWorkspaceThemeDarkPaletteHeader</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background">background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive">textActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive">textBackgroundActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover">textBackgroundHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover">textHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation">DataAwsccConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textActive`<sup>Required</sup> <a name="textActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive"></a>

```typescript
public readonly textActive: string;
```

- *Type:* string

---

##### `textBackgroundActive`<sup>Required</sup> <a name="textBackgroundActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```typescript
public readonly textBackgroundActive: string;
```

- *Type:* string

---

##### `textBackgroundHover`<sup>Required</sup> <a name="textBackgroundHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```typescript
public readonly textBackgroundHover: string;
```

- *Type:* string

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeDarkPaletteNavigation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation">DataAwsccConnectWorkspaceThemeDarkPaletteNavigation</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette">DataAwsccConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canvas`<sup>Required</sup> <a name="canvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas"></a>

```typescript
public readonly canvas: DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.header"></a>

```typescript
public readonly header: DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a>

---

##### `navigation`<sup>Required</sup> <a name="navigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation"></a>

```typescript
public readonly navigation: DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.primary"></a>

```typescript
public readonly primary: DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeDarkPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette">DataAwsccConnectWorkspaceThemeDarkPalette</a>

---


### DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active">active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText">contrastText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary">DataAwsccConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active"></a>

```typescript
public readonly active: string;
```

- *Type:* string

---

##### `contrastText`<sup>Required</sup> <a name="contrastText" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText"></a>

```typescript
public readonly contrastText: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeDarkPalettePrimary;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary">DataAwsccConnectWorkspaceThemeDarkPalettePrimary</a>

---


### DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily</a>

---


### DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily">fontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography">DataAwsccConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeDarkTypography;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography">DataAwsccConnectWorkspaceThemeDarkTypography</a>

---


### DataAwsccConnectWorkspaceThemeLightOutputReference <a name="DataAwsccConnectWorkspaceThemeLightOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight">DataAwsccConnectWorkspaceThemeLight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `palette`<sup>Required</sup> <a name="palette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.palette"></a>

```typescript
public readonly palette: DataAwsccConnectWorkspaceThemeLightPaletteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.typography"></a>

```typescript
public readonly typography: DataAwsccConnectWorkspaceThemeLightTypographyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeLight;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight">DataAwsccConnectWorkspaceThemeLight</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground">activeBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground">containerBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground">pageBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas">DataAwsccConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeBackground`<sup>Required</sup> <a name="activeBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground"></a>

```typescript
public readonly activeBackground: string;
```

- *Type:* string

---

##### `containerBackground`<sup>Required</sup> <a name="containerBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground"></a>

```typescript
public readonly containerBackground: string;
```

- *Type:* string

---

##### `pageBackground`<sup>Required</sup> <a name="pageBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground"></a>

```typescript
public readonly pageBackground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeLightPaletteCanvas;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas">DataAwsccConnectWorkspaceThemeLightPaletteCanvas</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background">background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover">textHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader">DataAwsccConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeLightPaletteHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader">DataAwsccConnectWorkspaceThemeLightPaletteHeader</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background">background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive">textActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive">textBackgroundActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover">textBackgroundHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover">textHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation">DataAwsccConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background"></a>

```typescript
public readonly background: string;
```

- *Type:* string

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors"></a>

```typescript
public readonly invertActionsColors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textActive`<sup>Required</sup> <a name="textActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive"></a>

```typescript
public readonly textActive: string;
```

- *Type:* string

---

##### `textBackgroundActive`<sup>Required</sup> <a name="textBackgroundActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```typescript
public readonly textBackgroundActive: string;
```

- *Type:* string

---

##### `textBackgroundHover`<sup>Required</sup> <a name="textBackgroundHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```typescript
public readonly textBackgroundHover: string;
```

- *Type:* string

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover"></a>

```typescript
public readonly textHover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeLightPaletteNavigation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation">DataAwsccConnectWorkspaceThemeLightPaletteNavigation</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette">DataAwsccConnectWorkspaceThemeLightPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canvas`<sup>Required</sup> <a name="canvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.canvas"></a>

```typescript
public readonly canvas: DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.header"></a>

```typescript
public readonly header: DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference</a>

---

##### `navigation`<sup>Required</sup> <a name="navigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.navigation"></a>

```typescript
public readonly navigation: DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.primary"></a>

```typescript
public readonly primary: DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeLightPalette;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette">DataAwsccConnectWorkspaceThemeLightPalette</a>

---


### DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active">active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText">contrastText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary">DataAwsccConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active"></a>

```typescript
public readonly active: string;
```

- *Type:* string

---

##### `contrastText`<sup>Required</sup> <a name="contrastText" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText"></a>

```typescript
public readonly contrastText: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeLightPalettePrimary;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary">DataAwsccConnectWorkspaceThemeLightPalettePrimary</a>

---


### DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference <a name="DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily">DataAwsccConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeLightTypographyFontFamily;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily">DataAwsccConnectWorkspaceThemeLightTypographyFontFamily</a>

---


### DataAwsccConnectWorkspaceThemeLightTypographyOutputReference <a name="DataAwsccConnectWorkspaceThemeLightTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily">fontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography">DataAwsccConnectWorkspaceThemeLightTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceThemeLightTypography;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography">DataAwsccConnectWorkspaceThemeLightTypography</a>

---


### DataAwsccConnectWorkspaceThemeOutputReference <a name="DataAwsccConnectWorkspaceThemeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectWorkspace } from '@cdktn/provider-awscc'

new dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.dark">dark</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference">DataAwsccConnectWorkspaceThemeDarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.light">light</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference">DataAwsccConnectWorkspaceThemeLightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme">DataAwsccConnectWorkspaceTheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dark`<sup>Required</sup> <a name="dark" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.dark"></a>

```typescript
public readonly dark: DataAwsccConnectWorkspaceThemeDarkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference">DataAwsccConnectWorkspaceThemeDarkOutputReference</a>

---

##### `light`<sup>Required</sup> <a name="light" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.light"></a>

```typescript
public readonly light: DataAwsccConnectWorkspaceThemeLightOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference">DataAwsccConnectWorkspaceThemeLightOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectWorkspaceTheme;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme">DataAwsccConnectWorkspaceTheme</a>

---



