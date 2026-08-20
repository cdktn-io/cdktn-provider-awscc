# `dataAwsccOmicsWorkflowVersion` Submodule <a name="`dataAwsccOmicsWorkflowVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOmicsWorkflowVersion <a name="DataAwsccOmicsWorkflowVersion" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/omics_workflow_version awscc_omics_workflow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

new dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion(scope: Construct, id: string, config: DataAwsccOmicsWorkflowVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig">DataAwsccOmicsWorkflowVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig">DataAwsccOmicsWorkflowVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOmicsWorkflowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isConstruct"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformElement"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccOmicsWorkflowVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOmicsWorkflowVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOmicsWorkflowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/omics_workflow_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOmicsWorkflowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.accelerators">accelerators</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.definitionUri">definitionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.main">main</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.parameterTemplate">parameterTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap">DataAwsccOmicsWorkflowVersionParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.workflowBucketOwnerId">workflowBucketOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.accelerators"></a>

```typescript
public readonly accelerators: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `definitionUri`<sup>Required</sup> <a name="definitionUri" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.definitionUri"></a>

```typescript
public readonly definitionUri: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `main`<sup>Required</sup> <a name="main" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

---

##### `parameterTemplate`<sup>Required</sup> <a name="parameterTemplate" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.parameterTemplate"></a>

```typescript
public readonly parameterTemplate: DataAwsccOmicsWorkflowVersionParameterTemplateMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap">DataAwsccOmicsWorkflowVersionParameterTemplateMap</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `workflowBucketOwnerId`<sup>Required</sup> <a name="workflowBucketOwnerId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.workflowBucketOwnerId"></a>

```typescript
public readonly workflowBucketOwnerId: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOmicsWorkflowVersionConfig <a name="DataAwsccOmicsWorkflowVersionConfig" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.Initializer"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

const dataAwsccOmicsWorkflowVersionConfig: dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/omics_workflow_version#id DataAwsccOmicsWorkflowVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOmicsWorkflowVersionParameterTemplate <a name="DataAwsccOmicsWorkflowVersionParameterTemplate" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate.Initializer"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

const dataAwsccOmicsWorkflowVersionParameterTemplate: dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOmicsWorkflowVersionParameterTemplateMap <a name="DataAwsccOmicsWorkflowVersionParameterTemplateMap" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

new dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.get"></a>

```typescript
public get(key: string): DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference <a name="DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccOmicsWorkflowVersion } from '@cdktn/provider-awscc'

new dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.optional">optional</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate">DataAwsccOmicsWorkflowVersionParameterTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.optional"></a>

```typescript
public readonly optional: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOmicsWorkflowVersionParameterTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate">DataAwsccOmicsWorkflowVersionParameterTemplate</a>

---



