# `dataAwsccNovaactWorkflowDefinition` Submodule <a name="`dataAwsccNovaactWorkflowDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNovaactWorkflowDefinition <a name="DataAwsccNovaactWorkflowDefinition" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/novaact_workflow_definition awscc_novaact_workflow_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.Initializer"></a>

```typescript
import { dataAwsccNovaactWorkflowDefinition } from '@cdktn/provider-awscc'

new dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition(scope: Construct, id: string, config: DataAwsccNovaactWorkflowDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig">DataAwsccNovaactWorkflowDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig">DataAwsccNovaactWorkflowDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNovaactWorkflowDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isConstruct"></a>

```typescript
import { dataAwsccNovaactWorkflowDefinition } from '@cdktn/provider-awscc'

dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccNovaactWorkflowDefinition } from '@cdktn/provider-awscc'

dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccNovaactWorkflowDefinition } from '@cdktn/provider-awscc'

dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccNovaactWorkflowDefinition } from '@cdktn/provider-awscc'

dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNovaactWorkflowDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNovaactWorkflowDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNovaactWorkflowDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/novaact_workflow_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNovaactWorkflowDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.exportConfig">exportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference">DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exportConfig`<sup>Required</sup> <a name="exportConfig" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.exportConfig"></a>

```typescript
public readonly exportConfig: DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference">DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNovaactWorkflowDefinitionConfig <a name="DataAwsccNovaactWorkflowDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccNovaactWorkflowDefinition } from '@cdktn/provider-awscc'

const dataAwsccNovaactWorkflowDefinitionConfig: dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/novaact_workflow_definition#id DataAwsccNovaactWorkflowDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNovaactWorkflowDefinitionExportConfig <a name="DataAwsccNovaactWorkflowDefinitionExportConfig" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfig.Initializer"></a>

```typescript
import { dataAwsccNovaactWorkflowDefinition } from '@cdktn/provider-awscc'

const dataAwsccNovaactWorkflowDefinitionExportConfig: dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference <a name="DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccNovaactWorkflowDefinition } from '@cdktn/provider-awscc'

new dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfig">DataAwsccNovaactWorkflowDefinitionExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNovaactWorkflowDefinitionExportConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNovaactWorkflowDefinition.DataAwsccNovaactWorkflowDefinitionExportConfig">DataAwsccNovaactWorkflowDefinitionExportConfig</a>

---



