# `dataAwsccApplicationautoscalingScalableTarget` Submodule <a name="`dataAwsccApplicationautoscalingScalableTarget` Submodule" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApplicationautoscalingScalableTarget <a name="DataAwsccApplicationautoscalingScalableTarget" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

new dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget(scope: Construct, id: string, config: DataAwsccApplicationautoscalingScalableTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig">DataAwsccApplicationautoscalingScalableTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig">DataAwsccApplicationautoscalingScalableTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isConstruct"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformElement"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformDataSource"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApplicationautoscalingScalableTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApplicationautoscalingScalableTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/applicationautoscaling_scalable_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApplicationautoscalingScalableTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scalableTargetId">scalableTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scheduledActions">scheduledActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList">DataAwsccApplicationautoscalingScalableTargetScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.suspendedState">suspendedState</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference">DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

---

##### `scalableTargetId`<sup>Required</sup> <a name="scalableTargetId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scalableTargetId"></a>

```typescript
public readonly scalableTargetId: string;
```

- *Type:* string

---

##### `scheduledActions`<sup>Required</sup> <a name="scheduledActions" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scheduledActions"></a>

```typescript
public readonly scheduledActions: DataAwsccApplicationautoscalingScalableTargetScheduledActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList">DataAwsccApplicationautoscalingScalableTargetScheduledActionsList</a>

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

---

##### `suspendedState`<sup>Required</sup> <a name="suspendedState" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.suspendedState"></a>

```typescript
public readonly suspendedState: DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference">DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApplicationautoscalingScalableTargetConfig <a name="DataAwsccApplicationautoscalingScalableTargetConfig" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

const dataAwsccApplicationautoscalingScalableTargetConfig: dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/applicationautoscaling_scalable_target#id DataAwsccApplicationautoscalingScalableTarget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApplicationautoscalingScalableTargetScheduledActions <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActions" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

const dataAwsccApplicationautoscalingScalableTargetScheduledActions: dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions = { ... }
```


### DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

const dataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction: dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction = { ... }
```


### DataAwsccApplicationautoscalingScalableTargetSuspendedState <a name="DataAwsccApplicationautoscalingScalableTargetSuspendedState" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

const dataAwsccApplicationautoscalingScalableTargetSuspendedState: dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApplicationautoscalingScalableTargetScheduledActionsList <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActionsList" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

new dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.get"></a>

```typescript
public get(index: number): DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

new dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction">scalableTargetAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName">scheduledActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions">DataAwsccApplicationautoscalingScalableTargetScheduledActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `scalableTargetAction`<sup>Required</sup> <a name="scalableTargetAction" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction"></a>

```typescript
public readonly scalableTargetAction: DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `scheduledActionName`<sup>Required</sup> <a name="scheduledActionName" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName"></a>

```typescript
public readonly scheduledActionName: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationautoscalingScalableTargetScheduledActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions">DataAwsccApplicationautoscalingScalableTargetScheduledActions</a>

---


### DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

new dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---


### DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference <a name="DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationautoscalingScalableTarget } from '@cdktn/provider-awscc'

new dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended">dynamicScalingInSuspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended">dynamicScalingOutSuspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended">scheduledScalingSuspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState">DataAwsccApplicationautoscalingScalableTargetSuspendedState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicScalingInSuspended`<sup>Required</sup> <a name="dynamicScalingInSuspended" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended"></a>

```typescript
public readonly dynamicScalingInSuspended: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dynamicScalingOutSuspended`<sup>Required</sup> <a name="dynamicScalingOutSuspended" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended"></a>

```typescript
public readonly dynamicScalingOutSuspended: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `scheduledScalingSuspended`<sup>Required</sup> <a name="scheduledScalingSuspended" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended"></a>

```typescript
public readonly scheduledScalingSuspended: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationautoscalingScalableTargetSuspendedState;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState">DataAwsccApplicationautoscalingScalableTargetSuspendedState</a>

---



