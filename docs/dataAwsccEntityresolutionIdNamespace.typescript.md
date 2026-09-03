# `dataAwsccEntityresolutionIdNamespace` Submodule <a name="`dataAwsccEntityresolutionIdNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionIdNamespace <a name="DataAwsccEntityresolutionIdNamespace" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/entityresolution_id_namespace awscc_entityresolution_id_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace(scope: Construct, id: string, config: DataAwsccEntityresolutionIdNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig">DataAwsccEntityresolutionIdNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig">DataAwsccEntityresolutionIdNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isConstruct"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformElement"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformDataSource"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEntityresolutionIdNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEntityresolutionIdNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/entityresolution_id_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionIdNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idMappingWorkflowProperties">idMappingWorkflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idNamespaceArn">idNamespaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idNamespaceName">idNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.inputSourceConfig">inputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList">DataAwsccEntityresolutionIdNamespaceInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList">DataAwsccEntityresolutionIdNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `idMappingWorkflowProperties`<sup>Required</sup> <a name="idMappingWorkflowProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idMappingWorkflowProperties"></a>

```typescript
public readonly idMappingWorkflowProperties: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList</a>

---

##### `idNamespaceArn`<sup>Required</sup> <a name="idNamespaceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idNamespaceArn"></a>

```typescript
public readonly idNamespaceArn: string;
```

- *Type:* string

---

##### `idNamespaceName`<sup>Required</sup> <a name="idNamespaceName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idNamespaceName"></a>

```typescript
public readonly idNamespaceName: string;
```

- *Type:* string

---

##### `inputSourceConfig`<sup>Required</sup> <a name="inputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.inputSourceConfig"></a>

```typescript
public readonly inputSourceConfig: DataAwsccEntityresolutionIdNamespaceInputSourceConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList">DataAwsccEntityresolutionIdNamespaceInputSourceConfigList</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.tags"></a>

```typescript
public readonly tags: DataAwsccEntityresolutionIdNamespaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList">DataAwsccEntityresolutionIdNamespaceTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionIdNamespaceConfig <a name="DataAwsccEntityresolutionIdNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionIdNamespaceConfig: dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/entityresolution_id_namespace#id DataAwsccEntityresolutionIdNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties: dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties = { ... }
```


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties: dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties = { ... }
```


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties: dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties = { ... }
```


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules: dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules = { ... }
```


### DataAwsccEntityresolutionIdNamespaceInputSourceConfig <a name="DataAwsccEntityresolutionIdNamespaceInputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionIdNamespaceInputSourceConfig: dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig = { ... }
```


### DataAwsccEntityresolutionIdNamespaceTags <a name="DataAwsccEntityresolutionIdNamespaceTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionIdNamespaceTags: dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingType">idMappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerProperties">providerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedProperties">ruleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idMappingType`<sup>Required</sup> <a name="idMappingType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingType"></a>

```typescript
public readonly idMappingType: string;
```

- *Type:* string

---

##### `providerProperties`<sup>Required</sup> <a name="providerProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerProperties"></a>

```typescript
public readonly providerProperties: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference</a>

---

##### `ruleBasedProperties`<sup>Required</sup> <a name="ruleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedProperties"></a>

```typescript
public readonly ruleBasedProperties: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties</a>

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfiguration">providerConfiguration</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArn">providerServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerConfiguration`<sup>Required</sup> <a name="providerConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```typescript
public readonly providerConfiguration: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `providerServiceArn`<sup>Required</sup> <a name="providerServiceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```typescript
public readonly providerServiceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModels">recordMatchingModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypes">ruleDefinitionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeMatchingModel`<sup>Required</sup> <a name="attributeMatchingModel" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```typescript
public readonly attributeMatchingModel: string;
```

- *Type:* string

---

##### `recordMatchingModels`<sup>Required</sup> <a name="recordMatchingModels" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModels"></a>

```typescript
public readonly recordMatchingModels: string[];
```

- *Type:* string[]

---

##### `ruleDefinitionTypes`<sup>Required</sup> <a name="ruleDefinitionTypes" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypes"></a>

```typescript
public readonly ruleDefinitionTypes: string[];
```

- *Type:* string[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get"></a>

```typescript
public get(index: number): DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">matchingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingKeys`<sup>Required</sup> <a name="matchingKeys" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```typescript
public readonly matchingKeys: string[];
```

- *Type:* string[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>

---


### DataAwsccEntityresolutionIdNamespaceInputSourceConfigList <a name="DataAwsccEntityresolutionIdNamespaceInputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.get"></a>

```typescript
public get(index: number): DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference <a name="DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArn">inputSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig">DataAwsccEntityresolutionIdNamespaceInputSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputSourceArn`<sup>Required</sup> <a name="inputSourceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArn"></a>

```typescript
public readonly inputSourceArn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEntityresolutionIdNamespaceInputSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig">DataAwsccEntityresolutionIdNamespaceInputSourceConfig</a>

---


### DataAwsccEntityresolutionIdNamespaceTagsList <a name="DataAwsccEntityresolutionIdNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEntityresolutionIdNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEntityresolutionIdNamespaceTagsOutputReference <a name="DataAwsccEntityresolutionIdNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionIdNamespace } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags">DataAwsccEntityresolutionIdNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEntityresolutionIdNamespaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags">DataAwsccEntityresolutionIdNamespaceTags</a>

---



