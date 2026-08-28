# `dataAwsccEcsDaemonTaskDefinition` Submodule <a name="`dataAwsccEcsDaemonTaskDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsDaemonTaskDefinition <a name="DataAwsccEcsDaemonTaskDefinition" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition awscc_ecs_daemon_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition(scope: Construct, id: string, config: DataAwsccEcsDaemonTaskDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig">DataAwsccEcsDaemonTaskDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig">DataAwsccEcsDaemonTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isConstruct"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEcsDaemonTaskDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEcsDaemonTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsDaemonTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.containerDefinitions">containerDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.daemonTaskDefinitionArn">daemonTaskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.ipcMode">ipcMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.pidMode">pidMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList">DataAwsccEcsDaemonTaskDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList">DataAwsccEcsDaemonTaskDefinitionVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `containerDefinitions`<sup>Required</sup> <a name="containerDefinitions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.containerDefinitions"></a>

```typescript
public readonly containerDefinitions: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList</a>

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `daemonTaskDefinitionArn`<sup>Required</sup> <a name="daemonTaskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.daemonTaskDefinitionArn"></a>

```typescript
public readonly daemonTaskDefinitionArn: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `ipcMode`<sup>Required</sup> <a name="ipcMode" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.ipcMode"></a>

```typescript
public readonly ipcMode: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `pidMode`<sup>Required</sup> <a name="pidMode" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.pidMode"></a>

```typescript
public readonly pidMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccEcsDaemonTaskDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList">DataAwsccEcsDaemonTaskDefinitionTagsList</a>

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.volumes"></a>

```typescript
public readonly volumes: DataAwsccEcsDaemonTaskDefinitionVolumesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList">DataAwsccEcsDaemonTaskDefinitionVolumesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsDaemonTaskDefinitionConfig <a name="DataAwsccEcsDaemonTaskDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionConfig: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition#id DataAwsccEcsDaemonTaskDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsDaemonTaskDefinitionContainerDefinitions <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitions: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionTags <a name="DataAwsccEcsDaemonTaskDefinitionTags" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionTags: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionVolumes <a name="DataAwsccEcsDaemonTaskDefinitionVolumes" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionVolumes: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes = { ... }
```


### DataAwsccEcsDaemonTaskDefinitionVolumesHost <a name="DataAwsccEcsDaemonTaskDefinitionVolumesHost" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsDaemonTaskDefinitionVolumesHost: dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.options">options</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```typescript
public readonly startPeriod: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.add">add</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.drop">drop</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.add"></a>

```typescript
public readonly add: string[];
```

- *Type:* string[]

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.drop"></a>

```typescript
public readonly drop: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.initProcessEnabled">initProcessEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.tmpfs">tmpfs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.capabilities"></a>

```typescript
public readonly capabilities: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference</a>

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.devices"></a>

```typescript
public readonly devices: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList</a>

---

##### `initProcessEnabled`<sup>Required</sup> <a name="initProcessEnabled" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.initProcessEnabled"></a>

```typescript
public readonly initProcessEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tmpfs`<sup>Required</sup> <a name="tmpfs" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.tmpfs"></a>

```typescript
public readonly tmpfs: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.logDriver">logDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.options">options</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.secretOptions">secretOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.logDriver"></a>

```typescript
public readonly logDriver: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `secretOptions`<sup>Required</sup> <a name="secretOptions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.secretOptions"></a>

```typescript
public readonly secretOptions: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.readOnly">readOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.sourceVolume">sourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sourceVolume`<sup>Required</sup> <a name="sourceVolume" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.sourceVolume"></a>

```typescript
public readonly sourceVolume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.dependsOn">dependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.environmentFiles">environmentFiles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.essential">essential</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.firelensConfiguration">firelensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.interactive">interactive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.linuxParameters">linuxParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.mountPoints">mountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.privileged">privileged</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.pseudoTerminal">pseudoTerminal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.readonlyRootFilesystem">readonlyRootFilesystem</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.restartPolicy">restartPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.startTimeout">startTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.stopTimeout">stopTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.systemControls">systemControls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.ulimits">ulimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions">DataAwsccEcsDaemonTaskDefinitionContainerDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList</a>

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.environment"></a>

```typescript
public readonly environment: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList</a>

---

##### `environmentFiles`<sup>Required</sup> <a name="environmentFiles" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.environmentFiles"></a>

```typescript
public readonly environmentFiles: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList</a>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.essential"></a>

```typescript
public readonly essential: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `firelensConfiguration`<sup>Required</sup> <a name="firelensConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.firelensConfiguration"></a>

```typescript
public readonly firelensConfiguration: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `interactive`<sup>Required</sup> <a name="interactive" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.interactive"></a>

```typescript
public readonly interactive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `linuxParameters`<sup>Required</sup> <a name="linuxParameters" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.linuxParameters"></a>

```typescript
public readonly linuxParameters: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference</a>

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `mountPoints`<sup>Required</sup> <a name="mountPoints" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.mountPoints"></a>

```typescript
public readonly mountPoints: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.privileged"></a>

```typescript
public readonly privileged: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `pseudoTerminal`<sup>Required</sup> <a name="pseudoTerminal" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.pseudoTerminal"></a>

```typescript
public readonly pseudoTerminal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `readonlyRootFilesystem`<sup>Required</sup> <a name="readonlyRootFilesystem" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.readonlyRootFilesystem"></a>

```typescript
public readonly readonlyRootFilesystem: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `repositoryCredentials`<sup>Required</sup> <a name="repositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.repositoryCredentials"></a>

```typescript
public readonly repositoryCredentials: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference</a>

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.secrets"></a>

```typescript
public readonly secrets: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList</a>

---

##### `startTimeout`<sup>Required</sup> <a name="startTimeout" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.startTimeout"></a>

```typescript
public readonly startTimeout: number;
```

- *Type:* number

---

##### `stopTimeout`<sup>Required</sup> <a name="stopTimeout" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.stopTimeout"></a>

```typescript
public readonly stopTimeout: number;
```

- *Type:* number

---

##### `systemControls`<sup>Required</sup> <a name="systemControls" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.systemControls"></a>

```typescript
public readonly systemControls: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList</a>

---

##### `ulimits`<sup>Required</sup> <a name="ulimits" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.ulimits"></a>

```typescript
public readonly ulimits: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions">DataAwsccEcsDaemonTaskDefinitionContainerDefinitions</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.ignoredExitCodes">ignoredExitCodes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.restartAttemptPeriod">restartAttemptPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ignoredExitCodes`<sup>Required</sup> <a name="ignoredExitCodes" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.ignoredExitCodes"></a>

```typescript
public readonly ignoredExitCodes: number[];
```

- *Type:* number[]

---

##### `restartAttemptPeriod`<sup>Required</sup> <a name="restartAttemptPeriod" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.restartAttemptPeriod"></a>

```typescript
public readonly restartAttemptPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.hardLimit">hardLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.softLimit">softLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hardLimit`<sup>Required</sup> <a name="hardLimit" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.hardLimit"></a>

```typescript
public readonly hardLimit: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `softLimit`<sup>Required</sup> <a name="softLimit" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.softLimit"></a>

```typescript
public readonly softLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits</a>

---


### DataAwsccEcsDaemonTaskDefinitionTagsList <a name="DataAwsccEcsDaemonTaskDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionTagsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags">DataAwsccEcsDaemonTaskDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags">DataAwsccEcsDaemonTaskDefinitionTags</a>

---


### DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.sourcePath">sourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost">DataAwsccEcsDaemonTaskDefinitionVolumesHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePath`<sup>Required</sup> <a name="sourcePath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.sourcePath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionVolumesHost;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost">DataAwsccEcsDaemonTaskDefinitionVolumesHost</a>

---


### DataAwsccEcsDaemonTaskDefinitionVolumesList <a name="DataAwsccEcsDaemonTaskDefinitionVolumesList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.get"></a>

```typescript
public get(index: number): DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsDaemonTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.host">host</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference">DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes">DataAwsccEcsDaemonTaskDefinitionVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.host"></a>

```typescript
public readonly host: DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference">DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsDaemonTaskDefinitionVolumes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes">DataAwsccEcsDaemonTaskDefinitionVolumes</a>

---



