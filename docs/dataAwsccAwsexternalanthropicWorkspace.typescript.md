# `dataAwsccAwsexternalanthropicWorkspace` Submodule <a name="`dataAwsccAwsexternalanthropicWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAwsexternalanthropicWorkspace <a name="DataAwsccAwsexternalanthropicWorkspace" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

new dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace(scope: Construct, id: string, config: DataAwsccAwsexternalanthropicWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig">DataAwsccAwsexternalanthropicWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig">DataAwsccAwsexternalanthropicWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAwsexternalanthropicWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAwsexternalanthropicWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/awsexternalanthropic_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAwsexternalanthropicWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dataResidency">dataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference">DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList">DataAwsccAwsexternalanthropicWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataResidency`<sup>Required</sup> <a name="dataResidency" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dataResidency"></a>

```typescript
public readonly dataResidency: DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference">DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tags"></a>

```typescript
public readonly tags: DataAwsccAwsexternalanthropicWorkspaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList">DataAwsccAwsexternalanthropicWorkspaceTagsList</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAwsexternalanthropicWorkspaceConfig <a name="DataAwsccAwsexternalanthropicWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.Initializer"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

const dataAwsccAwsexternalanthropicWorkspaceConfig: dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/awsexternalanthropic_workspace#id DataAwsccAwsexternalanthropicWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAwsexternalanthropicWorkspaceDataResidency <a name="DataAwsccAwsexternalanthropicWorkspaceDataResidency" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency.Initializer"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

const dataAwsccAwsexternalanthropicWorkspaceDataResidency: dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency = { ... }
```


### DataAwsccAwsexternalanthropicWorkspaceTags <a name="DataAwsccAwsexternalanthropicWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags.Initializer"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

const dataAwsccAwsexternalanthropicWorkspaceTags: dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference <a name="DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

new dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos">allowedInferenceGeos</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo">defaultInferenceGeo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo">workspaceGeo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency">DataAwsccAwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInferenceGeos`<sup>Required</sup> <a name="allowedInferenceGeos" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos"></a>

```typescript
public readonly allowedInferenceGeos: string[];
```

- *Type:* string[]

---

##### `defaultInferenceGeo`<sup>Required</sup> <a name="defaultInferenceGeo" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo"></a>

```typescript
public readonly defaultInferenceGeo: string;
```

- *Type:* string

---

##### `workspaceGeo`<sup>Required</sup> <a name="workspaceGeo" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo"></a>

```typescript
public readonly workspaceGeo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAwsexternalanthropicWorkspaceDataResidency;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency">DataAwsccAwsexternalanthropicWorkspaceDataResidency</a>

---


### DataAwsccAwsexternalanthropicWorkspaceTagsList <a name="DataAwsccAwsexternalanthropicWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

new dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference <a name="DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAwsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

new dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags">DataAwsccAwsexternalanthropicWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAwsexternalanthropicWorkspaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags">DataAwsccAwsexternalanthropicWorkspaceTags</a>

---



