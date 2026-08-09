# `dataAwsccEc2VpcEndpointConnectionNotifications` Submodule <a name="`dataAwsccEc2VpcEndpointConnectionNotifications` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VpcEndpointConnectionNotifications <a name="DataAwsccEc2VpcEndpointConnectionNotifications" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint_connection_notifications awscc_ec2_vpc_endpoint_connection_notifications}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpointConnectionNotifications } from '@cdktn/provider-awscc'

new dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications(scope: Construct, id: string, config?: DataAwsccEc2VpcEndpointConnectionNotificationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig">DataAwsccEc2VpcEndpointConnectionNotificationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig">DataAwsccEc2VpcEndpointConnectionNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VpcEndpointConnectionNotifications resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isConstruct"></a>

```typescript
import { dataAwsccEc2VpcEndpointConnectionNotifications } from '@cdktn/provider-awscc'

dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isTerraformElement"></a>

```typescript
import { dataAwsccEc2VpcEndpointConnectionNotifications } from '@cdktn/provider-awscc'

dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2VpcEndpointConnectionNotifications } from '@cdktn/provider-awscc'

dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2VpcEndpointConnectionNotifications } from '@cdktn/provider-awscc'

dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2VpcEndpointConnectionNotifications resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VpcEndpointConnectionNotifications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VpcEndpointConnectionNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint_connection_notifications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VpcEndpointConnectionNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotifications.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VpcEndpointConnectionNotificationsConfig <a name="DataAwsccEc2VpcEndpointConnectionNotificationsConfig" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpointConnectionNotifications } from '@cdktn/provider-awscc'

const dataAwsccEc2VpcEndpointConnectionNotificationsConfig: dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpointConnectionNotifications.DataAwsccEc2VpcEndpointConnectionNotificationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---



