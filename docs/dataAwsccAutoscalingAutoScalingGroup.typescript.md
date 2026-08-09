# `dataAwsccAutoscalingAutoScalingGroup` Submodule <a name="`dataAwsccAutoscalingAutoScalingGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAutoscalingAutoScalingGroup <a name="DataAwsccAutoscalingAutoScalingGroup" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_auto_scaling_group awscc_autoscaling_auto_scaling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup(scope: Construct, id: string, config: DataAwsccAutoscalingAutoScalingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig">DataAwsccAutoscalingAutoScalingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig">DataAwsccAutoscalingAutoScalingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAutoscalingAutoScalingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isConstruct"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformElement"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAutoscalingAutoScalingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAutoscalingAutoScalingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAutoscalingAutoScalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_auto_scaling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAutoscalingAutoScalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.autoScalingGroupArn">autoScalingGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.autoScalingGroupName">autoScalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneDistribution">availabilityZoneDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneIds">availabilityZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneImpairmentPolicy">availabilityZoneImpairmentPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.capacityRebalance">capacityRebalance</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.cooldown">cooldown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.defaultInstanceWarmup">defaultInstanceWarmup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.deletionProtection">deletionProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.desiredCapacity">desiredCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.desiredCapacityType">desiredCapacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceLifecyclePolicy">instanceLifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceMaintenancePolicy">instanceMaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.launchConfigurationName">launchConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference">DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.lifecycleHookSpecificationList">lifecycleHookSpecificationList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList">DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.loadBalancerNames">loadBalancerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.maxInstanceLifetime">maxInstanceLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.maxSize">maxSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.metricsCollection">metricsCollection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList">DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.minSize">minSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.mixedInstancesPolicy">mixedInstancesPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.newInstancesProtectedFromScaleIn">newInstancesProtectedFromScaleIn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.notificationConfigurations">notificationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.placementGroup">placementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.skipZonalShiftValidation">skipZonalShiftValidation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList">DataAwsccAutoscalingAutoScalingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.targetGroupArNs">targetGroupArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terminationPolicies">terminationPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.trafficSources">trafficSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList">DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.vpcZoneIdentifier">vpcZoneIdentifier</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `autoScalingGroupArn`<sup>Required</sup> <a name="autoScalingGroupArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.autoScalingGroupArn"></a>

```typescript
public readonly autoScalingGroupArn: string;
```

- *Type:* string

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="autoScalingGroupName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.autoScalingGroupName"></a>

```typescript
public readonly autoScalingGroupName: string;
```

- *Type:* string

---

##### `availabilityZoneDistribution`<sup>Required</sup> <a name="availabilityZoneDistribution" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneDistribution"></a>

```typescript
public readonly availabilityZoneDistribution: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference</a>

---

##### `availabilityZoneIds`<sup>Required</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneIds"></a>

```typescript
public readonly availabilityZoneIds: string[];
```

- *Type:* string[]

---

##### `availabilityZoneImpairmentPolicy`<sup>Required</sup> <a name="availabilityZoneImpairmentPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneImpairmentPolicy"></a>

```typescript
public readonly availabilityZoneImpairmentPolicy: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference</a>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `capacityRebalance`<sup>Required</sup> <a name="capacityRebalance" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.capacityRebalance"></a>

```typescript
public readonly capacityRebalance: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference</a>

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.cooldown"></a>

```typescript
public readonly cooldown: string;
```

- *Type:* string

---

##### `defaultInstanceWarmup`<sup>Required</sup> <a name="defaultInstanceWarmup" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.defaultInstanceWarmup"></a>

```typescript
public readonly defaultInstanceWarmup: number;
```

- *Type:* number

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: string;
```

- *Type:* string

---

##### `desiredCapacityType`<sup>Required</sup> <a name="desiredCapacityType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.desiredCapacityType"></a>

```typescript
public readonly desiredCapacityType: string;
```

- *Type:* string

---

##### `healthCheckGracePeriod`<sup>Required</sup> <a name="healthCheckGracePeriod" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: number;
```

- *Type:* number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceLifecyclePolicy`<sup>Required</sup> <a name="instanceLifecyclePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceLifecyclePolicy"></a>

```typescript
public readonly instanceLifecyclePolicy: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference</a>

---

##### `instanceMaintenancePolicy`<sup>Required</sup> <a name="instanceMaintenancePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceMaintenancePolicy"></a>

```typescript
public readonly instanceMaintenancePolicy: DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference</a>

---

##### `launchConfigurationName`<sup>Required</sup> <a name="launchConfigurationName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.launchConfigurationName"></a>

```typescript
public readonly launchConfigurationName: string;
```

- *Type:* string

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference">DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference</a>

---

##### `lifecycleHookSpecificationList`<sup>Required</sup> <a name="lifecycleHookSpecificationList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.lifecycleHookSpecificationList"></a>

```typescript
public readonly lifecycleHookSpecificationList: DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList">DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList</a>

---

##### `loadBalancerNames`<sup>Required</sup> <a name="loadBalancerNames" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.loadBalancerNames"></a>

```typescript
public readonly loadBalancerNames: string[];
```

- *Type:* string[]

---

##### `maxInstanceLifetime`<sup>Required</sup> <a name="maxInstanceLifetime" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.maxInstanceLifetime"></a>

```typescript
public readonly maxInstanceLifetime: number;
```

- *Type:* number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.maxSize"></a>

```typescript
public readonly maxSize: string;
```

- *Type:* string

---

##### `metricsCollection`<sup>Required</sup> <a name="metricsCollection" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.metricsCollection"></a>

```typescript
public readonly metricsCollection: DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList">DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList</a>

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.minSize"></a>

```typescript
public readonly minSize: string;
```

- *Type:* string

---

##### `mixedInstancesPolicy`<sup>Required</sup> <a name="mixedInstancesPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.mixedInstancesPolicy"></a>

```typescript
public readonly mixedInstancesPolicy: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference</a>

---

##### `newInstancesProtectedFromScaleIn`<sup>Required</sup> <a name="newInstancesProtectedFromScaleIn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.newInstancesProtectedFromScaleIn"></a>

```typescript
public readonly newInstancesProtectedFromScaleIn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference</a>

---

##### `notificationConfigurations`<sup>Required</sup> <a name="notificationConfigurations" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.notificationConfigurations"></a>

```typescript
public readonly notificationConfigurations: DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList</a>

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

---

##### `serviceLinkedRoleArn`<sup>Required</sup> <a name="serviceLinkedRoleArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.serviceLinkedRoleArn"></a>

```typescript
public readonly serviceLinkedRoleArn: string;
```

- *Type:* string

---

##### `skipZonalShiftValidation`<sup>Required</sup> <a name="skipZonalShiftValidation" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.skipZonalShiftValidation"></a>

```typescript
public readonly skipZonalShiftValidation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccAutoscalingAutoScalingGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList">DataAwsccAutoscalingAutoScalingGroupTagsList</a>

---

##### `targetGroupArNs`<sup>Required</sup> <a name="targetGroupArNs" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.targetGroupArNs"></a>

```typescript
public readonly targetGroupArNs: string[];
```

- *Type:* string[]

---

##### `terminationPolicies`<sup>Required</sup> <a name="terminationPolicies" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terminationPolicies"></a>

```typescript
public readonly terminationPolicies: string[];
```

- *Type:* string[]

---

##### `trafficSources`<sup>Required</sup> <a name="trafficSources" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.trafficSources"></a>

```typescript
public readonly trafficSources: DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList">DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList</a>

---

##### `vpcZoneIdentifier`<sup>Required</sup> <a name="vpcZoneIdentifier" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.vpcZoneIdentifier"></a>

```typescript
public readonly vpcZoneIdentifier: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution <a name="DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy <a name="DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification <a name="DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupConfig <a name="DataAwsccAutoscalingAutoScalingGroupConfig" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupConfig: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_auto_scaling_group#id DataAwsccAutoscalingAutoScalingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy <a name="DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers <a name="DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy <a name="DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupLaunchTemplate <a name="DataAwsccAutoscalingAutoScalingGroupLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupLaunchTemplate: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct <a name="DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMetricsCollection <a name="DataAwsccAutoscalingAutoScalingGroupMetricsCollection" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMetricsCollection: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupNotificationConfiguration: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupNotificationConfigurations: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupTags <a name="DataAwsccAutoscalingAutoScalingGroupTags" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupTags: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags = { ... }
```


### DataAwsccAutoscalingAutoScalingGroupTrafficSources <a name="DataAwsccAutoscalingAutoScalingGroupTrafficSources" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingAutoScalingGroupTrafficSources: dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.capacityDistributionStrategy">capacityDistributionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityDistributionStrategy`<sup>Required</sup> <a name="capacityDistributionStrategy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.capacityDistributionStrategy"></a>

```typescript
public readonly capacityDistributionStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution</a>

---


### DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.impairedZoneHealthCheckBehavior">impairedZoneHealthCheckBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.zonalShiftEnabled">zonalShiftEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `impairedZoneHealthCheckBehavior`<sup>Required</sup> <a name="impairedZoneHealthCheckBehavior" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.impairedZoneHealthCheckBehavior"></a>

```typescript
public readonly impairedZoneHealthCheckBehavior: string;
```

- *Type:* string

---

##### `zonalShiftEnabled`<sup>Required</sup> <a name="zonalShiftEnabled" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.zonalShiftEnabled"></a>

```typescript
public readonly zonalShiftEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy</a>

---


### DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIds">capacityReservationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArns">capacityReservationResourceGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationIds`<sup>Required</sup> <a name="capacityReservationIds" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIds"></a>

```typescript
public readonly capacityReservationIds: string[];
```

- *Type:* string[]

---

##### `capacityReservationResourceGroupArns`<sup>Required</sup> <a name="capacityReservationResourceGroupArns" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArns"></a>

```typescript
public readonly capacityReservationResourceGroupArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification</a>

---


### DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.retentionTriggers">retentionTriggers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionTriggers`<sup>Required</sup> <a name="retentionTriggers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.retentionTriggers"></a>

```typescript
public readonly retentionTriggers: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy</a>

---


### DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.terminateHookAbandon">terminateHookAbandon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `terminateHookAbandon`<sup>Required</sup> <a name="terminateHookAbandon" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.terminateHookAbandon"></a>

```typescript
public readonly terminateHookAbandon: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers</a>

---


### DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.maxHealthyPercentage">maxHealthyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.minHealthyPercentage">minHealthyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy">DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxHealthyPercentage`<sup>Required</sup> <a name="maxHealthyPercentage" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.maxHealthyPercentage"></a>

```typescript
public readonly maxHealthyPercentage: number;
```

- *Type:* number

---

##### `minHealthyPercentage`<sup>Required</sup> <a name="minHealthyPercentage" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.minHealthyPercentage"></a>

```typescript
public readonly minHealthyPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy">DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy</a>

---


### DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate">DataAwsccAutoscalingAutoScalingGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate">DataAwsccAutoscalingAutoScalingGroupLaunchTemplate</a>

---


### DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList <a name="DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.get"></a>

```typescript
public get(index: number): DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.defaultResult">defaultResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.lifecycleHookName">lifecycleHookName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.lifecycleTransition">lifecycleTransition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.notificationMetadata">notificationMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.notificationTargetArn">notificationTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct">DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultResult`<sup>Required</sup> <a name="defaultResult" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.defaultResult"></a>

```typescript
public readonly defaultResult: string;
```

- *Type:* string

---

##### `heartbeatTimeout`<sup>Required</sup> <a name="heartbeatTimeout" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: number;
```

- *Type:* number

---

##### `lifecycleHookName`<sup>Required</sup> <a name="lifecycleHookName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.lifecycleHookName"></a>

```typescript
public readonly lifecycleHookName: string;
```

- *Type:* string

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.lifecycleTransition"></a>

```typescript
public readonly lifecycleTransition: string;
```

- *Type:* string

---

##### `notificationMetadata`<sup>Required</sup> <a name="notificationMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.notificationMetadata"></a>

```typescript
public readonly notificationMetadata: string;
```

- *Type:* string

---

##### `notificationTargetArn`<sup>Required</sup> <a name="notificationTargetArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.notificationTargetArn"></a>

```typescript
public readonly notificationTargetArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct">DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct</a>

---


### DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList <a name="DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.get"></a>

```typescript
public get(index: number): DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.metrics">metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection">DataAwsccAutoscalingAutoScalingGroupMetricsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMetricsCollection;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection">DataAwsccAutoscalingAutoScalingGroupMetricsCollection</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacity">onDemandBaseCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacity">onDemandPercentageAboveBaseCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategy">spotAllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePools">spotInstancePools</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPrice">spotMaxPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onDemandAllocationStrategy`<sup>Required</sup> <a name="onDemandAllocationStrategy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategy"></a>

```typescript
public readonly onDemandAllocationStrategy: string;
```

- *Type:* string

---

##### `onDemandBaseCapacity`<sup>Required</sup> <a name="onDemandBaseCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacity"></a>

```typescript
public readonly onDemandBaseCapacity: number;
```

- *Type:* number

---

##### `onDemandPercentageAboveBaseCapacity`<sup>Required</sup> <a name="onDemandPercentageAboveBaseCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacity"></a>

```typescript
public readonly onDemandPercentageAboveBaseCapacity: number;
```

- *Type:* number

---

##### `spotAllocationStrategy`<sup>Required</sup> <a name="spotAllocationStrategy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategy"></a>

```typescript
public readonly spotAllocationStrategy: string;
```

- *Type:* string

---

##### `spotInstancePools`<sup>Required</sup> <a name="spotInstancePools" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePools"></a>

```typescript
public readonly spotInstancePools: number;
```

- *Type:* number

---

##### `spotMaxPrice`<sup>Required</sup> <a name="spotMaxPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPrice"></a>

```typescript
public readonly spotMaxPrice: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references">references</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references"></a>

```typescript
public readonly references: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get"></a>

```typescript
public get(index: number): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu">cpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorNames">acceleratorNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB">acceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.bareMetal">bareMetal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors">baselinePerformanceFactors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.burstablePerformance">burstablePerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.cpuManufacturers">cpuManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.instanceGenerations">instanceGenerations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.localStorage">localStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.localStorageTypes">localStorageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">maxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu">memoryGiBPerVCpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.memoryMiB">memoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps">networkBandwidthGbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.vCpuCount">vCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `acceleratorManufacturers`<sup>Required</sup> <a name="acceleratorManufacturers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```typescript
public readonly acceleratorManufacturers: string[];
```

- *Type:* string[]

---

##### `acceleratorNames`<sup>Required</sup> <a name="acceleratorNames" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```typescript
public readonly acceleratorNames: string[];
```

- *Type:* string[]

---

##### `acceleratorTotalMemoryMiB`<sup>Required</sup> <a name="acceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB"></a>

```typescript
public readonly acceleratorTotalMemoryMiB: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```typescript
public readonly acceleratorTypes: string[];
```

- *Type:* string[]

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```typescript
public readonly allowedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.bareMetal"></a>

```typescript
public readonly bareMetal: string;
```

- *Type:* string

---

##### `baselineEbsBandwidthMbps`<sup>Required</sup> <a name="baselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```typescript
public readonly baselineEbsBandwidthMbps: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `baselinePerformanceFactors`<sup>Required</sup> <a name="baselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors"></a>

```typescript
public readonly baselinePerformanceFactors: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a>

---

##### `burstablePerformance`<sup>Required</sup> <a name="burstablePerformance" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```typescript
public readonly burstablePerformance: string;
```

- *Type:* string

---

##### `cpuManufacturers`<sup>Required</sup> <a name="cpuManufacturers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```typescript
public readonly cpuManufacturers: string[];
```

- *Type:* string[]

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```typescript
public readonly excludedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `instanceGenerations`<sup>Required</sup> <a name="instanceGenerations" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```typescript
public readonly instanceGenerations: string[];
```

- *Type:* string[]

---

##### `localStorage`<sup>Required</sup> <a name="localStorage" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.localStorage"></a>

```typescript
public readonly localStorage: string;
```

- *Type:* string

---

##### `localStorageTypes`<sup>Required</sup> <a name="localStorageTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```typescript
public readonly localStorageTypes: string[];
```

- *Type:* string[]

---

##### `maxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Required</sup> <a name="maxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```typescript
public readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice: number;
```

- *Type:* number

---

##### `memoryGiBPerVCpu`<sup>Required</sup> <a name="memoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu"></a>

```typescript
public readonly memoryGiBPerVCpu: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a>

---

##### `memoryMiB`<sup>Required</sup> <a name="memoryMiB" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.memoryMiB"></a>

```typescript
public readonly memoryMiB: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference</a>

---

##### `networkBandwidthGbps`<sup>Required</sup> <a name="networkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```typescript
public readonly networkBandwidthGbps: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `networkInterfaceCount`<sup>Required</sup> <a name="networkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```typescript
public readonly networkInterfaceCount: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```typescript
public readonly onDemandMaxPricePercentageOverLowestPrice: number;
```

- *Type:* number

---

##### `requireHibernateSupport`<sup>Required</sup> <a name="requireHibernateSupport" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```typescript
public readonly requireHibernateSupport: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```typescript
public readonly spotMaxPricePercentageOverLowestPrice: number;
```

- *Type:* number

---

##### `totalLocalStorageGb`<sup>Required</sup> <a name="totalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```typescript
public readonly totalLocalStorageGb: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vCpuCount`<sup>Required</sup> <a name="vCpuCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.vCpuCount"></a>

```typescript
public readonly vCpuCount: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.get"></a>

```typescript
public get(index: number): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.instanceRequirements"></a>

```typescript
public readonly instanceRequirements: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference</a>

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.instancesDistribution">instancesDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesDistribution`<sup>Required</sup> <a name="instancesDistribution" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.instancesDistribution"></a>

```typescript
public readonly instancesDistribution: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy</a>

---


### DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.notificationTypes">notificationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration">DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationTypes`<sup>Required</sup> <a name="notificationTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.notificationTypes"></a>

```typescript
public readonly notificationTypes: string[];
```

- *Type:* string[]

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration">DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration</a>

---


### DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.notificationTypes">notificationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationTypes`<sup>Required</sup> <a name="notificationTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.notificationTypes"></a>

```typescript
public readonly notificationTypes: string[];
```

- *Type:* string[]

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations</a>

---


### DataAwsccAutoscalingAutoScalingGroupTagsList <a name="DataAwsccAutoscalingAutoScalingGroupTagsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAutoscalingAutoScalingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAutoscalingAutoScalingGroupTagsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags">DataAwsccAutoscalingAutoScalingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.propagateAtLaunch"></a>

```typescript
public readonly propagateAtLaunch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags">DataAwsccAutoscalingAutoScalingGroupTags</a>

---


### DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList <a name="DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingAutoScalingGroup } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources">DataAwsccAutoscalingAutoScalingGroupTrafficSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingAutoScalingGroupTrafficSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources">DataAwsccAutoscalingAutoScalingGroupTrafficSources</a>

---



