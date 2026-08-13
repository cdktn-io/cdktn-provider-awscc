# `dataAwsccWorkspacesWorkspaceIpGroup` Submodule <a name="`dataAwsccWorkspacesWorkspaceIpGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesWorkspaceIpGroup <a name="DataAwsccWorkspacesWorkspaceIpGroup" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspace_ip_group awscc_workspaces_workspace_ip_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup(scope: Construct, id: string, config: DataAwsccWorkspacesWorkspaceIpGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig">DataAwsccWorkspacesWorkspaceIpGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig">DataAwsccWorkspacesWorkspaceIpGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspacesWorkspaceIpGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspacesWorkspaceIpGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspace_ip_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesWorkspaceIpGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupDesc">groupDesc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList">DataAwsccWorkspacesWorkspaceIpGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.userRules">userRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList">DataAwsccWorkspacesWorkspaceIpGroupUserRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `groupDesc`<sup>Required</sup> <a name="groupDesc" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupDesc"></a>

```typescript
public readonly groupDesc: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccWorkspacesWorkspaceIpGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList">DataAwsccWorkspacesWorkspaceIpGroupTagsList</a>

---

##### `userRules`<sup>Required</sup> <a name="userRules" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.userRules"></a>

```typescript
public readonly userRules: DataAwsccWorkspacesWorkspaceIpGroupUserRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList">DataAwsccWorkspacesWorkspaceIpGroupUserRulesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesWorkspaceIpGroupConfig <a name="DataAwsccWorkspacesWorkspaceIpGroupConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.Initializer"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

const dataAwsccWorkspacesWorkspaceIpGroupConfig: dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspace_ip_group#id DataAwsccWorkspacesWorkspaceIpGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesWorkspaceIpGroupTags <a name="DataAwsccWorkspacesWorkspaceIpGroupTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags.Initializer"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

const dataAwsccWorkspacesWorkspaceIpGroupTags: dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags = { ... }
```


### DataAwsccWorkspacesWorkspaceIpGroupUserRules <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRules" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules.Initializer"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

const dataAwsccWorkspacesWorkspaceIpGroupUserRules: dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesWorkspaceIpGroupTagsList <a name="DataAwsccWorkspacesWorkspaceIpGroupTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference <a name="DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags">DataAwsccWorkspacesWorkspaceIpGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspacesWorkspaceIpGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags">DataAwsccWorkspacesWorkspaceIpGroupTags</a>

---


### DataAwsccWorkspacesWorkspaceIpGroupUserRulesList <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRulesList" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get"></a>

```typescript
public get(index: number): DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule">ipRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc">ruleDesc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules">DataAwsccWorkspacesWorkspaceIpGroupUserRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule"></a>

```typescript
public readonly ipRule: string;
```

- *Type:* string

---

##### `ruleDesc`<sup>Required</sup> <a name="ruleDesc" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc"></a>

```typescript
public readonly ruleDesc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspacesWorkspaceIpGroupUserRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules">DataAwsccWorkspacesWorkspaceIpGroupUserRules</a>

---



