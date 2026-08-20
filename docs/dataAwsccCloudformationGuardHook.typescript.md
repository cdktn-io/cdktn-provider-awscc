# `dataAwsccCloudformationGuardHook` Submodule <a name="`dataAwsccCloudformationGuardHook` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationGuardHook <a name="DataAwsccCloudformationGuardHook" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudformation_guard_hook awscc_cloudformation_guard_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook(scope: Construct, id: string, config: DataAwsccCloudformationGuardHookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig">DataAwsccCloudformationGuardHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig">DataAwsccCloudformationGuardHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationGuardHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudformationGuardHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudformationGuardHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudformationGuardHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationGuardHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.failureMode">failureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookArn">hookArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookStatus">hookStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.logBucket">logBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference">DataAwsccCloudformationGuardHookOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.ruleLocation">ruleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference">DataAwsccCloudformationGuardHookRuleLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference">DataAwsccCloudformationGuardHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference">DataAwsccCloudformationGuardHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetOperations">targetOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

---

##### `hookArn`<sup>Required</sup> <a name="hookArn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookArn"></a>

```typescript
public readonly hookArn: string;
```

- *Type:* string

---

##### `hookStatus`<sup>Required</sup> <a name="hookStatus" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookStatus"></a>

```typescript
public readonly hookStatus: string;
```

- *Type:* string

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.logBucket"></a>

```typescript
public readonly logBucket: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.options"></a>

```typescript
public readonly options: DataAwsccCloudformationGuardHookOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference">DataAwsccCloudformationGuardHookOptionsOutputReference</a>

---

##### `ruleLocation`<sup>Required</sup> <a name="ruleLocation" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.ruleLocation"></a>

```typescript
public readonly ruleLocation: DataAwsccCloudformationGuardHookRuleLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference">DataAwsccCloudformationGuardHookRuleLocationOutputReference</a>

---

##### `stackFilters`<sup>Required</sup> <a name="stackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.stackFilters"></a>

```typescript
public readonly stackFilters: DataAwsccCloudformationGuardHookStackFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference">DataAwsccCloudformationGuardHookStackFiltersOutputReference</a>

---

##### `targetFilters`<sup>Required</sup> <a name="targetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetFilters"></a>

```typescript
public readonly targetFilters: DataAwsccCloudformationGuardHookTargetFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference">DataAwsccCloudformationGuardHookTargetFiltersOutputReference</a>

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetOperations"></a>

```typescript
public readonly targetOperations: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationGuardHookConfig <a name="DataAwsccCloudformationGuardHookConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGuardHookConfig: dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudformation_guard_hook#id DataAwsccCloudformationGuardHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationGuardHookOptions <a name="DataAwsccCloudformationGuardHookOptions" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGuardHookOptions: dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions = { ... }
```


### DataAwsccCloudformationGuardHookRuleLocation <a name="DataAwsccCloudformationGuardHookRuleLocation" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGuardHookRuleLocation: dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation = { ... }
```


### DataAwsccCloudformationGuardHookStackFilters <a name="DataAwsccCloudformationGuardHookStackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGuardHookStackFilters: dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters = { ... }
```


### DataAwsccCloudformationGuardHookStackFiltersStackNames <a name="DataAwsccCloudformationGuardHookStackFiltersStackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGuardHookStackFiltersStackNames: dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames = { ... }
```


### DataAwsccCloudformationGuardHookStackFiltersStackRoles <a name="DataAwsccCloudformationGuardHookStackFiltersStackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGuardHookStackFiltersStackRoles: dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles = { ... }
```


### DataAwsccCloudformationGuardHookTargetFilters <a name="DataAwsccCloudformationGuardHookTargetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGuardHookTargetFilters: dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters = { ... }
```


### DataAwsccCloudformationGuardHookTargetFiltersTargets <a name="DataAwsccCloudformationGuardHookTargetFiltersTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGuardHookTargetFiltersTargets: dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationGuardHookOptionsOutputReference <a name="DataAwsccCloudformationGuardHookOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.inputParams">inputParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions">DataAwsccCloudformationGuardHookOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputParams`<sup>Required</sup> <a name="inputParams" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.inputParams"></a>

```typescript
public readonly inputParams: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGuardHookOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions">DataAwsccCloudformationGuardHookOptions</a>

---


### DataAwsccCloudformationGuardHookRuleLocationOutputReference <a name="DataAwsccCloudformationGuardHookRuleLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation">DataAwsccCloudformationGuardHookRuleLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGuardHookRuleLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation">DataAwsccCloudformationGuardHookRuleLocation</a>

---


### DataAwsccCloudformationGuardHookStackFiltersOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria">filteringCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackNames">stackNames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackRoles">stackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters">DataAwsccCloudformationGuardHookStackFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filteringCriteria`<sup>Required</sup> <a name="filteringCriteria" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria"></a>

```typescript
public readonly filteringCriteria: string;
```

- *Type:* string

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackNames"></a>

```typescript
public readonly stackNames: DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference</a>

---

##### `stackRoles`<sup>Required</sup> <a name="stackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackRoles"></a>

```typescript
public readonly stackRoles: DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGuardHookStackFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters">DataAwsccCloudformationGuardHookStackFilters</a>

---


### DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames">DataAwsccCloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGuardHookStackFiltersStackNames;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames">DataAwsccCloudformationGuardHookStackFiltersStackNames</a>

---


### DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles">DataAwsccCloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGuardHookStackFiltersStackRoles;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles">DataAwsccCloudformationGuardHookStackFiltersStackRoles</a>

---


### DataAwsccCloudformationGuardHookTargetFiltersOutputReference <a name="DataAwsccCloudformationGuardHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints">invocationPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targetNames">targetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList">DataAwsccCloudformationGuardHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters">DataAwsccCloudformationGuardHookTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `invocationPoints`<sup>Required</sup> <a name="invocationPoints" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints"></a>

```typescript
public readonly invocationPoints: string[];
```

- *Type:* string[]

---

##### `targetNames`<sup>Required</sup> <a name="targetNames" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targetNames"></a>

```typescript
public readonly targetNames: string[];
```

- *Type:* string[]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targets"></a>

```typescript
public readonly targets: DataAwsccCloudformationGuardHookTargetFiltersTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList">DataAwsccCloudformationGuardHookTargetFiltersTargetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGuardHookTargetFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters">DataAwsccCloudformationGuardHookTargetFilters</a>

---


### DataAwsccCloudformationGuardHookTargetFiltersTargetsList <a name="DataAwsccCloudformationGuardHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference <a name="DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGuardHook } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets">DataAwsccCloudformationGuardHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `invocationPoint`<sup>Required</sup> <a name="invocationPoint" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```typescript
public readonly invocationPoint: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGuardHookTargetFiltersTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets">DataAwsccCloudformationGuardHookTargetFiltersTargets</a>

---



