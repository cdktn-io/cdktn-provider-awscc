# `dataAwsccRobomakerSimulationApplication` Submodule <a name="`dataAwsccRobomakerSimulationApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRobomakerSimulationApplication <a name="DataAwsccRobomakerSimulationApplication" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/robomaker_simulation_application awscc_robomaker_simulation_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

new dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication(scope: Construct, id: string, config: DataAwsccRobomakerSimulationApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig">DataAwsccRobomakerSimulationApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig">DataAwsccRobomakerSimulationApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRobomakerSimulationApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isConstruct"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isTerraformElement"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isTerraformDataSource"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.generateConfigForImport"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRobomakerSimulationApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRobomakerSimulationApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRobomakerSimulationApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/robomaker_simulation_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRobomakerSimulationApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.currentRevisionId">currentRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.renderingEngine">renderingEngine</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference">DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.simulationSoftwareSuite">simulationSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList">DataAwsccRobomakerSimulationApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `currentRevisionId`<sup>Required</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.currentRevisionId"></a>

```typescript
public readonly currentRevisionId: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `renderingEngine`<sup>Required</sup> <a name="renderingEngine" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.renderingEngine"></a>

```typescript
public readonly renderingEngine: DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference">DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference</a>

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.robotSoftwareSuite"></a>

```typescript
public readonly robotSoftwareSuite: DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="simulationSoftwareSuite" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.simulationSoftwareSuite"></a>

```typescript
public readonly simulationSoftwareSuite: DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.sources"></a>

```typescript
public readonly sources: DataAwsccRobomakerSimulationApplicationSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList">DataAwsccRobomakerSimulationApplicationSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRobomakerSimulationApplicationConfig <a name="DataAwsccRobomakerSimulationApplicationConfig" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

const dataAwsccRobomakerSimulationApplicationConfig: dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/robomaker_simulation_application#id DataAwsccRobomakerSimulationApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRobomakerSimulationApplicationRenderingEngine <a name="DataAwsccRobomakerSimulationApplicationRenderingEngine" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngine.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

const dataAwsccRobomakerSimulationApplicationRenderingEngine: dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngine = { ... }
```


### DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite <a name="DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

const dataAwsccRobomakerSimulationApplicationRobotSoftwareSuite: dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite = { ... }
```


### DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite <a name="DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

const dataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite: dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite = { ... }
```


### DataAwsccRobomakerSimulationApplicationSources <a name="DataAwsccRobomakerSimulationApplicationSources" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSources.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

const dataAwsccRobomakerSimulationApplicationSources: dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference <a name="DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

new dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngine">DataAwsccRobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRobomakerSimulationApplicationRenderingEngine;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRenderingEngine">DataAwsccRobomakerSimulationApplicationRenderingEngine</a>

---


### DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference <a name="DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

new dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite">DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite">DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite</a>

---


### DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference <a name="DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

new dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite">DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite">DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite</a>

---


### DataAwsccRobomakerSimulationApplicationSourcesList <a name="DataAwsccRobomakerSimulationApplicationSourcesList" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

new dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccRobomakerSimulationApplicationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRobomakerSimulationApplicationSourcesOutputReference <a name="DataAwsccRobomakerSimulationApplicationSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccRobomakerSimulationApplication } from '@cdktn/provider-awscc'

new dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSources">DataAwsccRobomakerSimulationApplicationSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRobomakerSimulationApplicationSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplication.DataAwsccRobomakerSimulationApplicationSources">DataAwsccRobomakerSimulationApplicationSources</a>

---



