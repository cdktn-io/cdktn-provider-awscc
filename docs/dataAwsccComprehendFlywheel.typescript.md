# `dataAwsccComprehendFlywheel` Submodule <a name="`dataAwsccComprehendFlywheel` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendFlywheel <a name="DataAwsccComprehendFlywheel" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/comprehend_flywheel awscc_comprehend_flywheel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel(scope: Construct, id: string, config: DataAwsccComprehendFlywheelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig">DataAwsccComprehendFlywheelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig">DataAwsccComprehendFlywheelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComprehendFlywheel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isConstruct"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isTerraformElement"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isTerraformDataSource"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.generateConfigForImport"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccComprehendFlywheel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccComprehendFlywheel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccComprehendFlywheel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/comprehend_flywheel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendFlywheel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.activeModelArn">activeModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.dataLakeS3Uri">dataLakeS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.dataSecurityConfig">dataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference">DataAwsccComprehendFlywheelDataSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.flywheelName">flywheelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList">DataAwsccComprehendFlywheelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.taskConfig">taskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference">DataAwsccComprehendFlywheelTaskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `activeModelArn`<sup>Required</sup> <a name="activeModelArn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.activeModelArn"></a>

```typescript
public readonly activeModelArn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `dataLakeS3Uri`<sup>Required</sup> <a name="dataLakeS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.dataLakeS3Uri"></a>

```typescript
public readonly dataLakeS3Uri: string;
```

- *Type:* string

---

##### `dataSecurityConfig`<sup>Required</sup> <a name="dataSecurityConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.dataSecurityConfig"></a>

```typescript
public readonly dataSecurityConfig: DataAwsccComprehendFlywheelDataSecurityConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference">DataAwsccComprehendFlywheelDataSecurityConfigOutputReference</a>

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.flywheelName"></a>

```typescript
public readonly flywheelName: string;
```

- *Type:* string

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.tags"></a>

```typescript
public readonly tags: DataAwsccComprehendFlywheelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList">DataAwsccComprehendFlywheelTagsList</a>

---

##### `taskConfig`<sup>Required</sup> <a name="taskConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.taskConfig"></a>

```typescript
public readonly taskConfig: DataAwsccComprehendFlywheelTaskConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference">DataAwsccComprehendFlywheelTaskConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendFlywheelConfig <a name="DataAwsccComprehendFlywheelConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

const dataAwsccComprehendFlywheelConfig: dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/comprehend_flywheel#id DataAwsccComprehendFlywheel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendFlywheelDataSecurityConfig <a name="DataAwsccComprehendFlywheelDataSecurityConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

const dataAwsccComprehendFlywheelDataSecurityConfig: dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfig = { ... }
```


### DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig <a name="DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

const dataAwsccComprehendFlywheelDataSecurityConfigVpcConfig: dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig = { ... }
```


### DataAwsccComprehendFlywheelTags <a name="DataAwsccComprehendFlywheelTags" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTags.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

const dataAwsccComprehendFlywheelTags: dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTags = { ... }
```


### DataAwsccComprehendFlywheelTaskConfig <a name="DataAwsccComprehendFlywheelTaskConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

const dataAwsccComprehendFlywheelTaskConfig: dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfig = { ... }
```


### DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig <a name="DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

const dataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig: dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig = { ... }
```


### DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig <a name="DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

const dataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig: dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig = { ... }
```


### DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes <a name="DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

const dataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes: dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendFlywheelDataSecurityConfigOutputReference <a name="DataAwsccComprehendFlywheelDataSecurityConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId">dataLakeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfig">DataAwsccComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakeKmsKeyId`<sup>Required</sup> <a name="dataLakeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId"></a>

```typescript
public readonly dataLakeKmsKeyId: string;
```

- *Type:* string

---

##### `modelKmsKeyId`<sup>Required</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId"></a>

```typescript
public readonly modelKmsKeyId: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendFlywheelDataSecurityConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfig">DataAwsccComprehendFlywheelDataSecurityConfig</a>

---


### DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference <a name="DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig">DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig">DataAwsccComprehendFlywheelDataSecurityConfigVpcConfig</a>

---


### DataAwsccComprehendFlywheelTagsList <a name="DataAwsccComprehendFlywheelTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.get"></a>

```typescript
public get(index: number): DataAwsccComprehendFlywheelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComprehendFlywheelTagsOutputReference <a name="DataAwsccComprehendFlywheelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTags">DataAwsccComprehendFlywheelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendFlywheelTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTags">DataAwsccComprehendFlywheelTags</a>

---


### DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference <a name="DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig">DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig">DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---


### DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList <a name="DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get"></a>

```typescript
public get(index: number): DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference <a name="DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>

---


### DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference <a name="DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig">DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes"></a>

```typescript
public readonly entityTypes: DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig">DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---


### DataAwsccComprehendFlywheelTaskConfigOutputReference <a name="DataAwsccComprehendFlywheelTaskConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendFlywheel } from '@cdktn/provider-awscc'

new dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig">documentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig">entityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfig">DataAwsccComprehendFlywheelTaskConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `documentClassificationConfig`<sup>Required</sup> <a name="documentClassificationConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig"></a>

```typescript
public readonly documentClassificationConfig: DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">DataAwsccComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a>

---

##### `entityRecognitionConfig`<sup>Required</sup> <a name="entityRecognitionConfig" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig"></a>

```typescript
public readonly entityRecognitionConfig: DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">DataAwsccComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendFlywheelTaskConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendFlywheel.DataAwsccComprehendFlywheelTaskConfig">DataAwsccComprehendFlywheelTaskConfig</a>

---



