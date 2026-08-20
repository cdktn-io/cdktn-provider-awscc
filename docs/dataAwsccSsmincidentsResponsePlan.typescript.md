# `dataAwsccSsmincidentsResponsePlan` Submodule <a name="`dataAwsccSsmincidentsResponsePlan` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmincidentsResponsePlan <a name="DataAwsccSsmincidentsResponsePlan" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ssmincidents_response_plan awscc_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan(scope: Construct, id: string, config: DataAwsccSsmincidentsResponsePlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig">DataAwsccSsmincidentsResponsePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig">DataAwsccSsmincidentsResponsePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isConstruct"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformElement"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformDataSource"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmincidentsResponsePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList">DataAwsccSsmincidentsResponsePlanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.chatChannel">chatChannel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference">DataAwsccSsmincidentsResponsePlanChatChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.engagements">engagements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.incidentTemplate">incidentTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference">DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.integrations">integrations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList">DataAwsccSsmincidentsResponsePlanIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList">DataAwsccSsmincidentsResponsePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.actions"></a>

```typescript
public readonly actions: DataAwsccSsmincidentsResponsePlanActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList">DataAwsccSsmincidentsResponsePlanActionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `chatChannel`<sup>Required</sup> <a name="chatChannel" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.chatChannel"></a>

```typescript
public readonly chatChannel: DataAwsccSsmincidentsResponsePlanChatChannelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference">DataAwsccSsmincidentsResponsePlanChatChannelOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `engagements`<sup>Required</sup> <a name="engagements" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.engagements"></a>

```typescript
public readonly engagements: string[];
```

- *Type:* string[]

---

##### `incidentTemplate`<sup>Required</sup> <a name="incidentTemplate" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.incidentTemplate"></a>

```typescript
public readonly incidentTemplate: DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference">DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `integrations`<sup>Required</sup> <a name="integrations" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.integrations"></a>

```typescript
public readonly integrations: DataAwsccSsmincidentsResponsePlanIntegrationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList">DataAwsccSsmincidentsResponsePlanIntegrationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.tags"></a>

```typescript
public readonly tags: DataAwsccSsmincidentsResponsePlanTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList">DataAwsccSsmincidentsResponsePlanTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmincidentsResponsePlanActions <a name="DataAwsccSsmincidentsResponsePlanActions" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanActions: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions = { ... }
```


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomation <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomation" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanActionsSsmAutomation: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation = { ... }
```


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters = { ... }
```


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue = { ... }
```


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters = { ... }
```


### DataAwsccSsmincidentsResponsePlanChatChannel <a name="DataAwsccSsmincidentsResponsePlanChatChannel" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanChatChannel: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel = { ... }
```


### DataAwsccSsmincidentsResponsePlanConfig <a name="DataAwsccSsmincidentsResponsePlanConfig" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanConfig: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ssmincidents_response_plan#id DataAwsccSsmincidentsResponsePlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmincidentsResponsePlanIncidentTemplate <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplate" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanIncidentTemplate: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate = { ... }
```


### DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags = { ... }
```


### DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets = { ... }
```


### DataAwsccSsmincidentsResponsePlanIntegrations <a name="DataAwsccSsmincidentsResponsePlanIntegrations" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanIntegrations: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations = { ... }
```


### DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration <a name="DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration = { ... }
```


### DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration <a name="DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration = { ... }
```


### DataAwsccSsmincidentsResponsePlanTags <a name="DataAwsccSsmincidentsResponsePlanTags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsResponsePlanTags: dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmincidentsResponsePlanActionsList <a name="DataAwsccSsmincidentsResponsePlanActionsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsResponsePlanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsResponsePlanActionsOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation">ssmAutomation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions">DataAwsccSsmincidentsResponsePlanActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ssmAutomation`<sup>Required</sup> <a name="ssmAutomation" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation"></a>

```typescript
public readonly ssmAutomation: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions">DataAwsccSsmincidentsResponsePlanActions</a>

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion">documentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters">dynamicParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount">targetAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation">DataAwsccSsmincidentsResponsePlanActionsSsmAutomation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

---

##### `dynamicParameters`<sup>Required</sup> <a name="dynamicParameters" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters"></a>

```typescript
public readonly dynamicParameters: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `targetAccount`<sup>Required</sup> <a name="targetAccount" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount"></a>

```typescript
public readonly targetAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanActionsSsmAutomation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation">DataAwsccSsmincidentsResponsePlanActionsSsmAutomation</a>

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters</a>

---


### DataAwsccSsmincidentsResponsePlanChatChannelOutputReference <a name="DataAwsccSsmincidentsResponsePlanChatChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns">chatbotSns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel">DataAwsccSsmincidentsResponsePlanChatChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chatbotSns`<sup>Required</sup> <a name="chatbotSns" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns"></a>

```typescript
public readonly chatbotSns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanChatChannel;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel">DataAwsccSsmincidentsResponsePlanChatChannel</a>

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags">DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags">DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags</a>

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets">DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets">DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">dedupeString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">impact</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">incidentTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList">DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets">notificationTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate">DataAwsccSsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedupeString`<sup>Required</sup> <a name="dedupeString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```typescript
public readonly dedupeString: string;
```

- *Type:* string

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```typescript
public readonly impact: number;
```

- *Type:* number

---

##### `incidentTags`<sup>Required</sup> <a name="incidentTags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```typescript
public readonly incidentTags: DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList">DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a>

---

##### `notificationTargets`<sup>Required</sup> <a name="notificationTargets" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets"></a>

```typescript
public readonly notificationTargets: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a>

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanIncidentTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate">DataAwsccSsmincidentsResponsePlanIncidentTemplate</a>

---


### DataAwsccSsmincidentsResponsePlanIntegrationsList <a name="DataAwsccSsmincidentsResponsePlanIntegrationsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference <a name="DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration">pagerDutyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations">DataAwsccSsmincidentsResponsePlanIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pagerDutyConfiguration`<sup>Required</sup> <a name="pagerDutyConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration"></a>

```typescript
public readonly pagerDutyConfiguration: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanIntegrations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations">DataAwsccSsmincidentsResponsePlanIntegrations</a>

---


### DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference <a name="DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration">pagerDutyIncidentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pagerDutyIncidentConfiguration`<sup>Required</sup> <a name="pagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration"></a>

```typescript
public readonly pagerDutyIncidentConfiguration: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---


### DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference <a name="DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---


### DataAwsccSsmincidentsResponsePlanTagsList <a name="DataAwsccSsmincidentsResponsePlanTagsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsResponsePlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsResponsePlanTagsOutputReference <a name="DataAwsccSsmincidentsResponsePlanTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsResponsePlan } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags">DataAwsccSsmincidentsResponsePlanTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsResponsePlanTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags">DataAwsccSsmincidentsResponsePlanTags</a>

---



