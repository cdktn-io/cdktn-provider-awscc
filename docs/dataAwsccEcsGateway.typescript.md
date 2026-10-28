# `dataAwsccEcsGateway` Submodule <a name="`dataAwsccEcsGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsGateway <a name="DataAwsccEcsGateway" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway awscc_ecs_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGateway(scope: Construct, id: string, config: DataAwsccEcsGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig">DataAwsccEcsGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig">DataAwsccEcsGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEcsGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEcsGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEcsGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference">DataAwsccEcsGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.gatewayName">gatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList">DataAwsccEcsGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccEcsGatewayConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference">DataAwsccEcsGatewayConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.infrastructureRoleArn"></a>

```typescript
public readonly infrastructureRoleArn: string;
```

- *Type:* string

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tags"></a>

```typescript
public readonly tags: DataAwsccEcsGatewayTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList">DataAwsccEcsGatewayTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsGatewayConfig <a name="DataAwsccEcsGatewayConfig" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfig: dataAwsccEcsGateway.DataAwsccEcsGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway#id DataAwsccEcsGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsGatewayConfiguration <a name="DataAwsccEcsGatewayConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfiguration: dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration = { ... }
```


### DataAwsccEcsGatewayConfigurationHostSharedAlb <a name="DataAwsccEcsGatewayConfigurationHostSharedAlb" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfigurationHostSharedAlb: dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb = { ... }
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs: dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs = { ... }
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination: dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination = { ... }
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3: dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 = { ... }
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration: dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration = { ... }
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules: dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules = { ... }
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader: dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader = { ... }
```


### DataAwsccEcsGatewayTags <a name="DataAwsccEcsGatewayTags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

const dataAwsccEcsGatewayTags: dataAwsccEcsGateway.DataAwsccEcsGatewayTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination"></a>

```typescript
public readonly destination: DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup">inboundSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inboundSecurityGroup`<sup>Required</sup> <a name="inboundSecurityGroup" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup"></a>

```typescript
public readonly inboundSecurityGroup: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount">currentAlbCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync">httpDesync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount">maxAlbCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules">testTrafficRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn">webAclArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb">DataAwsccEcsGatewayConfigurationHostSharedAlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLogs`<sup>Required</sup> <a name="accessLogs" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs"></a>

```typescript
public readonly accessLogs: DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a>

---

##### `currentAlbCount`<sup>Required</sup> <a name="currentAlbCount" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount"></a>

```typescript
public readonly currentAlbCount: number;
```

- *Type:* number

---

##### `httpDesync`<sup>Required</sup> <a name="httpDesync" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync"></a>

```typescript
public readonly httpDesync: string;
```

- *Type:* string

---

##### `maxAlbCount`<sup>Required</sup> <a name="maxAlbCount" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount"></a>

```typescript
public readonly maxAlbCount: number;
```

- *Type:* number

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `testTrafficRules`<sup>Required</sup> <a name="testTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules"></a>

```typescript
public readonly testTrafficRules: DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a>

---

##### `webAclArn`<sup>Required</sup> <a name="webAclArn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn"></a>

```typescript
public readonly webAclArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayConfigurationHostSharedAlb;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb">DataAwsccEcsGatewayConfigurationHostSharedAlb</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header"></a>

```typescript
public readonly header: DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

---


### DataAwsccEcsGatewayConfigurationOutputReference <a name="DataAwsccEcsGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.hostSharedAlb">hostSharedAlb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration">DataAwsccEcsGatewayConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostSharedAlb`<sup>Required</sup> <a name="hostSharedAlb" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.hostSharedAlb"></a>

```typescript
public readonly hostSharedAlb: DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration">DataAwsccEcsGatewayConfiguration</a>

---


### DataAwsccEcsGatewayTagsList <a name="DataAwsccEcsGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsGatewayTagsOutputReference <a name="DataAwsccEcsGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsGateway } from '@cdktn/provider-awscc'

new dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags">DataAwsccEcsGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsGatewayTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags">DataAwsccEcsGatewayTags</a>

---



