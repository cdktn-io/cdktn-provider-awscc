# `dataAwsccCloudformationTypeActivation` Submodule <a name="`dataAwsccCloudformationTypeActivation` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationTypeActivation <a name="DataAwsccCloudformationTypeActivation" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_type_activation awscc_cloudformation_type_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.Initializer"></a>

```typescript
import { dataAwsccCloudformationTypeActivation } from '@cdktn/provider-awscc'

new dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation(scope: Construct, id: string, config: DataAwsccCloudformationTypeActivationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig">DataAwsccCloudformationTypeActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig">DataAwsccCloudformationTypeActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationTypeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isConstruct"></a>

```typescript
import { dataAwsccCloudformationTypeActivation } from '@cdktn/provider-awscc'

dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isTerraformElement"></a>

```typescript
import { dataAwsccCloudformationTypeActivation } from '@cdktn/provider-awscc'

dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudformationTypeActivation } from '@cdktn/provider-awscc'

dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudformationTypeActivation } from '@cdktn/provider-awscc'

dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudformationTypeActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudformationTypeActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudformationTypeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_type_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationTypeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.autoUpdate">autoUpdate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference">DataAwsccCloudformationTypeActivationLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.majorVersion">majorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.publicTypeArn">publicTypeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.publisherId">publisherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.typeNameAlias">typeNameAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.versionBump">versionBump</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: DataAwsccCloudformationTypeActivationLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference">DataAwsccCloudformationTypeActivationLoggingConfigOutputReference</a>

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

---

##### `publicTypeArn`<sup>Required</sup> <a name="publicTypeArn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.publicTypeArn"></a>

```typescript
public readonly publicTypeArn: string;
```

- *Type:* string

---

##### `publisherId`<sup>Required</sup> <a name="publisherId" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.publisherId"></a>

```typescript
public readonly publisherId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typeNameAlias`<sup>Required</sup> <a name="typeNameAlias" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.typeNameAlias"></a>

```typescript
public readonly typeNameAlias: string;
```

- *Type:* string

---

##### `versionBump`<sup>Required</sup> <a name="versionBump" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.versionBump"></a>

```typescript
public readonly versionBump: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationTypeActivationConfig <a name="DataAwsccCloudformationTypeActivationConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.Initializer"></a>

```typescript
import { dataAwsccCloudformationTypeActivation } from '@cdktn/provider-awscc'

const dataAwsccCloudformationTypeActivationConfig: dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_type_activation#id DataAwsccCloudformationTypeActivation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationTypeActivationLoggingConfig <a name="DataAwsccCloudformationTypeActivationLoggingConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfig.Initializer"></a>

```typescript
import { dataAwsccCloudformationTypeActivation } from '@cdktn/provider-awscc'

const dataAwsccCloudformationTypeActivationLoggingConfig: dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationTypeActivationLoggingConfigOutputReference <a name="DataAwsccCloudformationTypeActivationLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationTypeActivation } from '@cdktn/provider-awscc'

new dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn">logRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfig">DataAwsccCloudformationTypeActivationLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logRoleArn`<sup>Required</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn"></a>

```typescript
public readonly logRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationTypeActivationLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationTypeActivation.DataAwsccCloudformationTypeActivationLoggingConfig">DataAwsccCloudformationTypeActivationLoggingConfig</a>

---



